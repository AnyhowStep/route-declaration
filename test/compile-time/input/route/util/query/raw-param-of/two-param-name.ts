import * as rd from "../../../../../../../dist";

export const route = rd.route()
    .appendParam("x")
    .appendParam("y");
declare function rawParamOf<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.RawParamOf<DataT>;
export const rawParam = rawParamOf(route);