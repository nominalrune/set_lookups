import {  KintoneFormFieldProperty } from'@kintone/rest-api-client'
export namespace app106  {
  interface Fields {
    shodate1: KintoneFormFieldProperty.Date;
    seibetsu: KintoneFormFieldProperty.DropDown;
    baitai4: KintoneFormFieldProperty.DropDown;
    baitai2: KintoneFormFieldProperty.DropDown;
    address_1: KintoneFormFieldProperty.SingleLineText;
    baitai3: KintoneFormFieldProperty.DropDown;
    address_2: KintoneFormFieldProperty.SingleLineText;
    shohuri: KintoneFormFieldProperty.Number;
    gakunen: KintoneFormFieldProperty.DropDown;
    telnum_0: KintoneFormFieldProperty.SingleLineText;
    telnum_1: KintoneFormFieldProperty.SingleLineText;
    naiyo: KintoneFormFieldProperty.MultiLineText;
    ルックアップ: KintoneFormFieldProperty.Lookup;
    nippokubun: KintoneFormFieldProperty.DropDown;
    kyoshitsu: KintoneFormFieldProperty.DropDown;
    contactnum: KintoneFormFieldProperty.SingleLineText;
    zipcode: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_7: KintoneFormFieldProperty.DropDown;
    baitai1: KintoneFormFieldProperty.DropDown;
    ドロップダウン_9: KintoneFormFieldProperty.DropDown;
    nipposhukei: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_8: KintoneFormFieldProperty.DropDown;
    ドロップダウン_5: KintoneFormFieldProperty.DropDown;
    telnum: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_4: KintoneFormFieldProperty.DropDown;
    gessha: KintoneFormFieldProperty.Number;
    faxdate: KintoneFormFieldProperty.Date;
    nipposhukeinengetsu: KintoneFormFieldProperty.SingleLineText;
    E: KintoneFormFieldProperty.Number;
    cname: KintoneFormFieldProperty.SingleLineText;
    keiyakusha2: KintoneFormFieldProperty.SingleLineText;
    keiyakusha1: KintoneFormFieldProperty.SingleLineText;
    Q: KintoneFormFieldProperty.Number;
    R: KintoneFormFieldProperty.Number;
    taikenshuryo: KintoneFormFieldProperty.DateTime;
    W: KintoneFormFieldProperty.Number;
    lookup: KintoneFormFieldProperty.Lookup;
    address: KintoneFormFieldProperty.SingleLineText;
    nippodate: KintoneFormFieldProperty.Date;
    apodate: KintoneFormFieldProperty.DateTime;
    ラジオボタン: KintoneFormFieldProperty.RadioButton;
    ドロップダウン: KintoneFormFieldProperty.DropDown;
    ラジオボタン_0: KintoneFormFieldProperty.RadioButton;
    文字列__1行__0: KintoneFormFieldProperty.SingleLineText;
    keiyakudate: KintoneFormFieldProperty.Date;
    文字列__1行__4: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__14: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__5: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__13: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__2: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__16: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__15: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__10: KintoneFormFieldProperty.SingleLineText;
    seikyuday: KintoneFormFieldProperty.Date;
    文字列__1行__6: KintoneFormFieldProperty.SingleLineText;
    文字列__1行__12: KintoneFormFieldProperty.SingleLineText;
    ドロップダウン_10: KintoneFormFieldProperty.DropDown;
    taikenkaishi: KintoneFormFieldProperty.DateTime;
    month: KintoneFormFieldProperty.Calc;
    チェックボックス_2: KintoneFormFieldProperty.CheckBox;
    チェックボックス_3: KintoneFormFieldProperty.CheckBox;
    チェックボックス_1: KintoneFormFieldProperty.CheckBox;
    チェックボックス: KintoneFormFieldProperty.CheckBox;
    kekka: KintoneFormFieldProperty.CheckBox;

    添付ファイル: KintoneFormFieldProperty.File;
  }
  interface SavedFields extends Fields {
    $id: KintoneFormFieldProperty.Id;
    $revision: KintoneFormFieldProperty.Revision;
    更新者: KintoneFormFieldProperty.Modifier;
    作成者: KintoneFormFieldProperty.Creator;
    レコード番号: KintoneFormFieldProperty.RecordNumber;
    作成日時: KintoneFormFieldProperty.CreatedTime;
    更新日時: KintoneFormFieldProperty.UpdatedTime;
  }
}
