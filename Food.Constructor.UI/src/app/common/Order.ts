interface KeyValue {
    Key: number;
    Value: string;
}

export interface Order {
    CompanyId: string;
    CustomerId: string;
    Dishes: Array<any> | null;
    History: KeyValue[];
    Id: string;
    IssuePointId: string;
    State: number;
}
