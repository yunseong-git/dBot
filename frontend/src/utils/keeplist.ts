export function saveToKeeplist(item: { _id: string; name: string }) {
    const stored = localStorage.getItem('keepList');
    let list = stored ? JSON.parse(stored) : [];

    if (!Array.isArray(list)) list = [];

    // 중복 제거 + 최신순
    list = [item, ...list.filter((i: any) => i._id !== item._id)].slice(0, 10);
    localStorage.setItem('keepList', JSON.stringify(list));

    // ▶️ 커스텀 이벤트로 수동 알림
    window.dispatchEvent(new Event('keeplist-updated'));
}

export function removeFromKeeplist(id: string) {
    const stored = localStorage.getItem('keepList');
    let list = stored ? JSON.parse(stored) : [];

    if (!Array.isArray(list)) list = [];

    list = list.filter((item: any) => item._id !== id);
    localStorage.setItem('keepList', JSON.stringify(list));

    // 갱신 알림
    window.dispatchEvent(new Event('keeplist-updated'));
}