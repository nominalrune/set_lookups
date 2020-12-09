import {  KintoneFormFieldProperty } from'@kintone/rest-api-client'
export default app106;
namespace app106 {
  interface Fields {
    reason: KintoneFormFieldProperty.MultiLineText;
    kokyakunum: KintoneFormFieldProperty.SingleLineText;
    teishikaishi: KintoneFormFieldProperty.Date;
    shitenmei: KintoneFormFieldProperty.DropDown;
    saikenst: KintoneFormFieldProperty.DropDown;
    数値_4: KintoneFormFieldProperty.Number;
    数値_3: KintoneFormFieldProperty.Number;
    数値_6: KintoneFormFieldProperty.Number;
    数値_5: KintoneFormFieldProperty.Number;
    nippokeijobi: KintoneFormFieldProperty.Date;
    数値_8: KintoneFormFieldProperty.Number;
    数値_7: KintoneFormFieldProperty.Number;
    数値_0: KintoneFormFieldProperty.Number;
    数値_2: KintoneFormFieldProperty.Number;
    henkinflag: KintoneFormFieldProperty.DropDown;
    数値: KintoneFormFieldProperty.Number;
    teishikaishi_moji: KintoneFormFieldProperty.SingleLineText;
    nipposhukeinengetsu: KintoneFormFieldProperty.SingleLineText;
    pname1: KintoneFormFieldProperty.SingleLineText;
    tanto: KintoneFormFieldProperty.DropDown;
    pname2: KintoneFormFieldProperty.SingleLineText;
    gesshanow: KintoneFormFieldProperty.Number;
    文字列__複数行__2: KintoneFormFieldProperty.MultiLineText;
    sel: KintoneFormFieldProperty.DropDown;
    lookup: KintoneFormFieldProperty.Lookup;
    coflag: KintoneFormFieldProperty.DropDown;
    taikaiday: KintoneFormFieldProperty.Date;
    nippoday: KintoneFormFieldProperty.SingleLineText;
    ラジオボタン: KintoneFormFieldProperty.RadioButton;
    ラジオボタン_0: KintoneFormFieldProperty.RadioButton;
    文字列__1行__4: KintoneFormFieldProperty.SingleLineText;
    日付_5: KintoneFormFieldProperty.Date;
    日付_4: KintoneFormFieldProperty.Date;
    文字列__1行__2: KintoneFormFieldProperty.SingleLineText;
    日付_10: KintoneFormFieldProperty.Date;
    文字列__1行__3: KintoneFormFieldProperty.SingleLineText;
    日付_6: KintoneFormFieldProperty.Date;
    日付_9: KintoneFormFieldProperty.Date;
    日付_12: KintoneFormFieldProperty.Date;
    teishikaishi_nyukin: KintoneFormFieldProperty.SingleLineText;
    日付_11: KintoneFormFieldProperty.Date;
    文字列__1行__6: KintoneFormFieldProperty.SingleLineText;
    genbareco: KintoneFormFieldProperty.SingleLineText;
    日付_1: KintoneFormFieldProperty.Date;
    日付_0: KintoneFormFieldProperty.Date;
    kaishu: KintoneFormFieldProperty.Calc;
    cancelkin: KintoneFormFieldProperty.Calc;
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
