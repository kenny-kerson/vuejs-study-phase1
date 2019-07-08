export default {
    tsList: [
        {tsId: "ts1", tsName: "시나리오1"},
        {tsId: "ts2", tsName: "시나리오1"},
        {tsId: "ts3", tsName: "시나리오1"},
    ],
    originTcList: [
        {tcId: "tc1", tcName: "케이스1", tsId: "ts1"},
        {tcId: "tc2", tcName: "케이스2", tsId: "ts1"},
        {tcId: "tc3", tcName: "케이스3", tsId: "ts2"},
    ],
    teList: [
        {date: "20190613", time: "010000", tsId: "ts1"},
        {date: "20190613", time: "020000", tsId: "ts1"},
        {date: "20190613", time: "030000", tsId: "ts2"},
    ],
    currentComponent: "TestExecution",
    selectTsId: ""
}