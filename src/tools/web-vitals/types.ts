import type { ReportCallback as Reporter } from 'web-vitals';

export interface Default {
  (reporter?: Reporter): false | Promise<void>;
}

export type Metric = Function;

export type Metrics = {
  getCLS: Metric;
  getFID: Metric;
  getFCP: Metric;
  getLCP: Metric;
  getTTFB: Metric;
};
