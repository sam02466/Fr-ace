/* Shared frontend API client. Set API URL in the UI or use same-origin /api proxy. */
(function () {
  const KEY = 'navgta_api_base';
  const TOKEN = 'navgta_auth_token';
  function normalizeBase(value) { return String(value || '').trim().replace(/\/+$/, ''); }
  function getBase() {
    try { const saved = localStorage.getItem(KEY); if (saved) return normalizeBase(saved); } catch (_) {}
    if (window.NAVGTA_API_BASE) return normalizeBase(window.NAVGTA_API_BASE);
    const meta = document.querySelector('meta[name="api-base-url"]');
    if (meta && meta.content) return normalizeBase(meta.content);
    return '';
  }
  async function request(path, options = {}) {
    const headers = Object.assign({ 'Accept': 'application/json' }, options.headers || {});
    const token = (() => { try { return localStorage.getItem(TOKEN); } catch (_) { return null; } })();
    if (token) headers.Authorization = 'Bearer ' + token;
    if (options.body !== undefined && !headers['Content-Type']) headers['Content-Type'] = 'application/json';
    let response;
    try { response = await fetch(getBase() + path, Object.assign({}, options, { headers })); }
    catch (_) { throw new Error('Cannot reach the API. Check the API URL and that the Render backend is running.'); }
    let data = {}; try { data = await response.json(); } catch (_) {}
    if (!response.ok || data.success === false) {
      if (response.status === 401) window.dispatchEvent(new CustomEvent('navgta:unauthorized'));
      throw new Error(data?.error?.message || data?.message || `Request failed (${response.status})`);
    }
    return data;
  }
  const api = {
    getBase,
    setBase(value) { const base = normalizeBase(value); if (!base) throw new Error('Enter a valid API base URL.'); localStorage.setItem(KEY, base); return base; },
    getToken() { try { return localStorage.getItem(TOKEN); } catch (_) { return null; } },
    setSession(data) { if (data?.token) localStorage.setItem(TOKEN, data.token); if (data?.user) localStorage.setItem('navgta_user', JSON.stringify(data.user)); },
    clearSession() { localStorage.removeItem(TOKEN); localStorage.removeItem('navgta_user'); localStorage.removeItem('navgta_profile_draft'); },
    isAuthenticated() { return !!this.getToken(); },
    request,
    me: () => request('/api/users/me'),
    wallet: (currency='INR') => request('/api/wallet?currency='+encodeURIComponent(currency)),
    transactions: (currency='INR') => request('/api/wallet/transactions?currency='+encodeURIComponent(currency)),
    games: (params={}) => { const q = new URLSearchParams(params); return request('/api/games'+(q.toString()?'?'+q:'')); },
    game: id => request('/api/games/'+encodeURIComponent(id)),
    launch: (id, body={}) => request('/api/games/'+encodeURIComponent(id)+'/launch', {method:'POST', body:JSON.stringify({currency:'INR',language:'en',device:/Mobi|Android/i.test(navigator.userAgent)?'mobile':'desktop',country:'IN',homeUrl:location.href,...body})}),
    sessions: (limit=30) => request('/api/game-sessions?limit='+limit),
    session: id => request('/api/game-sessions/'+encodeURIComponent(id)),
    sendOtp: identifier => request('/api/auth/otp/send',{method:'POST',body:JSON.stringify({identifier})}),
    verifyOtp: (identifier,code) => request('/api/auth/otp/verify',{method:'POST',body:JSON.stringify({identifier,code})}),
    logout: async () => { try { if (this.isAuthenticated()) await request('/api/auth/logout',{method:'POST'}); } finally { this.clearSession(); } },
    money(value, currency='INR') { const n = Number(value || 0); return new Intl.NumberFormat('en-IN',{style:'currency',currency,minimumFractionDigits:2}).format(Number.isFinite(n)?n:0); },
    date(value) { const d = new Date(value); return Number.isNaN(d.getTime()) ? '—' : d.toLocaleString(); },
    escape(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); },
    async launchAndOpen(id) { const result = await this.launch(id); if (!result.launchUrl) throw new Error('The provider did not return a game launch URL.'); window.open(result.launchUrl, '_blank', 'noopener,noreferrer'); return result; }
  };
  window.NAVGTA = api;
})();
