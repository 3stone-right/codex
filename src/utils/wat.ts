import * as d3 from 'd3';

export interface Record {
  lot: string;
  site: string;
  coord: string;
  item: string;
  device: string;
  parameter: string;
  specHigh: number | null;
  specLow: number | null;
  value: number | null;
}

export async function loadCsv(): Promise<Record[]> {
  const data = await d3.csv('/data/WAT_9site_dummy_long_v2.csv');
  return data as unknown as Record[];
}

export function lotStats(records: Record[]): { [lot: string]: { total: number; ng: number; marginal: number } } {
  const stats: any = {};
  records.forEach(r => {
    stats[r.lot] = stats[r.lot] || { total: 0, ng: 0, marginal: 0 };
    stats[r.lot].total++;
  });
  return stats;
}
