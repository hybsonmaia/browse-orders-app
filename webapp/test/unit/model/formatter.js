sap.ui.define(["sap/ui/demo/orderbrowser/model/formatter","../helper/FakeI18nModel"],function(t,e){"use strict";QUnit.module("formatter - Currency value");function r(e,r,i){var n=t.currencyValue(r);e.strictEqual(n,i,"The rounding was correct")}QUnit.test("Should round down a 3 digit number",function(t){r.call(this,t,"3.123","3.12")});QUnit.test("Should round up a 3 digit number",function(t){r.call(this,t,"3.128","3.13")});QUnit.test("Should round a negative number",function(t){r.call(this,t,"-3","-3.00")});QUnit.test("Should round an empty string",function(t){r.call(this,t,"","")});QUnit.test("Should round a zero",function(t){r.call(this,t,"0","0.00")});QUnit.module("formatter - Binary Content");QUnit.test("The type metadata is prepended  to the image string when binary date is passed to the formatter",function(e){var r=t.handleBinaryContent("binaryData");e.strictEqual(r,"data:image/jpeg;base64,","The image is formatted correctly")});QUnit.test("Calling the formatter with no picture content returns the default picture URL",function(e){var r=t.handleBinaryContent("");e.strictEqual(r,"../images/Employee.png","The image is formatted correctly")});QUnit.module("formatter - Delivery text");function i(r,i,n,o){var a={getModel:function(){return new e({formatterDeliveryUrgent:1,formatterDeliveryInTime:2,formatterDeliveryTooLate:3})}};var d=t.deliveryText.bind(a);var s=d(i,n);r.strictEqual(s,o,"Correct text was assigned")}QUnit.test("Should provide the delivery status 'None' for orders with no shipped date",function(t){i.call(this,t,"1128522175000",null,"None")});QUnit.test("Should provide the delivery status 'Urgent' for orders with shipped date > required date",function(t){i.call(this,t,"1206800575000","1206368675000",1)});QUnit.test("Should provide the delivery status text 'In time' for orders with shipped date > required date",function(t){i.call(this,t,"1129818175000","1128522175000",2)});QUnit.test("Should provide the delivery status text 'Too late' for orders with shipped date > required date",function(t){i.call(this,t,"1243952575000","1389972175000",3)});QUnit.module("formatter - Delivery state");function n(e,r,i,n){var o=t.deliveryState(r,i);e.strictEqual(o,n,"The formatter returned the correct state")}QUnit.test('Should return "Warning" state for orders with no shipped date',function(t){n.call(this,t,"1206800575000","1206368675000","Warning")});QUnit.test('Should return "Success" status for orders with shipped date > required date',function(t){n.call(this,t,"1129818175000","1128522175000","Success")});QUnit.test('Should return "Error" state for orders with shipped date > required date',function(t){n.call(this,t,"1243952575000","1389972175000","Error")})});