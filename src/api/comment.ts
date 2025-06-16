export async function fetchAiComment(ctx: { lot: string; wafer: string; param: string; device: string; }): Promise<string> {
  return new Promise(r => setTimeout(() => {
    const msgs = [
      'All sites in spec.\nNo action needed.',
      'Hotspot detected near (3,-4).\nCheck implant uniformity.',
      'Idsat trending high (+2 %).\nMonitor next lot.'
    ];
    r(msgs[Math.floor(Math.random()*msgs.length)]);
  }, 1200));
}
