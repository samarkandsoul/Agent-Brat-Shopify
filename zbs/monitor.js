// ZBS — Zahid Brat Sistemi Monitor Modulu
// Bu modul hər 10 dəqiqədən bir sistemin "nəbzini" ölçəcək.

// Mini heartbeat
function heartbeat() {
    const now = new Date().toISOString();
    console.log(`[ZBS] Heartbeat — Sistem işləyir (${now})`);
}

// 10 dəqiqəlik interval (600,000 ms)
setInterval(heartbeat, 600000);

// İlk işə düşəndə də bir dəfə işləsin:
heartbeat();
