export interface MainApiType{
    items: MainApiItemType,
    numOfRows: number,
    pageNo: number,
    totalCount: number
}

export interface MainApiItemType{
    item: MainApiItemDetialType[]
}

export interface MainApiItemDetialType{
    crno: string,
    isinCd: string,
    isinCdNm: string,
    stckDvdnRcd: string,
    stckDvdnRcdNm: string,
    stckGenrCashDvdnRt: string,
    stckIssuCmpyNm: string,
    stckParPrc: string,
    stckStacMd: string,
}