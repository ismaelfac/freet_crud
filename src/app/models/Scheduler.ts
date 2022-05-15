export interface Scheduler {
    id?: number;
    route_id: number;
    week_num: DoubleRange;
    from: Date;
    to: Date;
}