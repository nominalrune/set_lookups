import {  KintoneFormFieldProperty } from'@kintone/rest-api-client'
export default app106
declare namespace app106 {
  interface Fields {
    seibetsu: KintoneFormFieldProperty.DropDown;
    baitai4: KintoneFormFieldProperty.DropDown;
    address_0: KintoneFormFieldProperty.SingleLineText;
    baitai2: KintoneFormFieldProperty.DropDown;
    address_1: KintoneFormFieldProperty.SingleLineText;
    taikendate: KintoneFormFieldProperty.DateTime;
    baitai3: KintoneFormFieldProperty.DropDown;
    address_2: KintoneFormFieldProperty.SingleLineText;
    gakunen: KintoneFormFieldProperty.DropDown;
    naiyo: KintoneFormFieldProperty.MultiLineText;
    apselect: KintoneFormFieldProperty.RadioButton;
    lookup: KintoneFormFieldProperty.Lookup;
    address: KintoneFormFieldProperty.SingleLineText;
    ラジオボタン_2: KintoneFormFieldProperty.RadioButton;
    nippodate: KintoneFormFieldProperty.Date;
    ラジオボタン_3: KintoneFormFieldProperty.RadioButton;
    ラジオボタン_4: KintoneFormFieldProperty.RadioButton;
    apodate: KintoneFormFieldProperty.DateTime;
    cname1: KintoneFormFieldProperty.SingleLineText;
    ラジオボタン_0: KintoneFormFieldProperty.RadioButton;
    ラジオボタン_1: KintoneFormFieldProperty.RadioButton;
    数値_0: KintoneFormFieldProperty.Number;
    drop01: KintoneFormFieldProperty.DropDown;
    cname2: KintoneFormFieldProperty.SingleLineText;
    contactnum: KintoneFormFieldProperty.SingleLineText;
    zipcode: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_1: KintoneFormFieldProperty.DropDown;
    seikyuday: KintoneFormFieldProperty.Date;
    telsearch: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_6: KintoneFormFieldProperty.DropDown;
    baitai1: KintoneFormFieldProperty.DropDown;
    nipposhukei: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_3: KintoneFormFieldProperty.DropDown;
    ドロップダウン_5: KintoneFormFieldProperty.DropDown;
    telnum: KintoneFormFieldProperty.SingleLineText;
  }
  interface SavedFields extends Fields {
    $id: KintoneFormFieldProperty.Id;
    $revision: KintoneFormFieldProperty.Revision;
    更新者: KintoneFormFieldProperty.Modifier;
    作成者: KintoneFormFieldProperty.Creator;
    レコード番号: KintoneFormFieldProperty.RecordNumber;
    更新日時: KintoneFormFieldProperty.UpdatedTime;
    作成日時: KintoneFormFieldProperty.CreatedTime;
  }
}
