import { kintone } from './index'
import app106 from "./app106"
import app107 from "./app107"
import app108 from "./app108"
import app135 from "./app135"
import app8 from "./app8"

interface Resp<T> {
	properties: T,
	app: number,
	revision?: number
}

type appId = {
	KOKYAKU: {old: number, new: number};
	APO: {old: number, new: number};
	GEMBA: {old: number, new: number};
	NIPPOU: {old: number, new: number};
	TAIKAI: {old: number, new: number};
}
type whatToEdit = {
	type: "KOKYAKU" | "APO" | "GEMBA" | "NIPPOU" | "TAIKAI";
	fieldNames:string[];
}
const setApp = (app:appId,edit:whatToEdit) => {
	kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { "app": app[edit.type].new })
		.then((resp: Resp<app106.Fields>) => {
			resp.properties.lookup.lookup.relatedApp.app = "283";
			resp.properties.lookup.lookup.relatedApp.code = "fukushima";
			resp.app = 284;
			resp.revision = -1;
			kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'PUT', resp)
		})
		.then((resp) => {
			console.log("PUT:", resp);
			kintone.api(kintone.api.url('/k/v1/preview/app/deploy', true), 'POST', {
				'apps': [
					{ 'app': 284, 'revision': -1 }]
			});
		})
		.catch((err) => {
			throw new Error(err)
		})
};

const setKokyakukanriApp = () => {
	kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { "app": 106 })
		.then((resp: Resp<app106.Fields>) => {
			resp.properties.lookup.lookup.relatedApp.app = "283";
			resp.properties.lookup.lookup.relatedApp.code = "fukushima";
			resp.app = 284;
			resp.revision = -1;
			kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'PUT', resp)
		})
		.then((resp) => {
			console.log("PUT:", resp);
			kintone.api(kintone.api.url('/k/v1/preview/app/deploy', true), 'POST', {
				'apps': [
					{ 'app': 284, 'revision': -1 }]
			});
		})
		.catch((err) => {
			throw new Error(err)
		})
};

/** 
 * 現場報告
 * 2020/12/08　仙台支店から福島支店へアプリをコピーしたあと、lookupを変更したときに作ったコード
 */
const setGembahoukokuApp = () => {
	kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { "app": 107 },
		function (resp) {
			// success
			resp = resp;
			resp.properties.lookup.lookup.relatedApp.app = "283";
			resp.properties.lookup.lookup.relatedApp.code = "fukushima";
			resp.app = 288;
			resp.revision = -1;
			console.log("get:", resp);
			kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'PUT', resp,
				function (resp) {
					// success
					console.log("PUT:", resp);
					kintone.api(kintone.api.url('/k/v1/preview/app/deploy', true), 'POST', {
						'apps': [
							{ 'app': 288, 'revision': -1 }]
					},
						function (resp) {
							// success
							console.log(resp);
						}, function (error) {
							// error
							console.log('POST err', error);
						});
				}, function (error) {
					// error
					console.log('PUT err', error);
				});
		}, function (error) {
			// error
			console.log('GET err', error);
		});
};
/** 
 * 退会申請
 * 2020/12/08　仙台支店から福島支店へアプリをコピーしたあと、lookupを変更したときに作ったコード
 */
const setTaikaiApp = () => {
	kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { "app": 135 },
		function (resp) {
			// success
			resp = resp;
			resp.properties.lookup.lookup.relatedApp.app = "283";
			resp.properties.lookup.lookup.relatedApp.code = "fukushima";
			resp.app = 287;
			resp.revision = -1;
			console.log("get:", resp);
			kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'PUT', resp,
				function (resp) {
					// success
					console.log("PUT:", resp);
					kintone.api(kintone.api.url('/k/v1/preview/app/deploy', true), 'POST', {
						'apps': [
							{ 'app': 287, 'revision': -1 }]
					},
						function (resp) {
							// success
							console.log(resp);
						}, function (error) {
							// error
							console.log('POST err', error);
						});
				}, function (error) {
					// error
					console.log('PUT err', error);
				});
		}, function (error) {
			// error
			console.log('GET err', error);
		});
};
/** 
 * 日報
 * 2020/12/08　仙台支店から福島支店へアプリをコピーしたあと、lookupを変更したときに作ったコード
 */
const setNippouApp = () => {
	kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { "app": 108 },
		function (resp) {
			// success
			resp = resp;
			resp.properties["関連レコード一覧_0"].referenceTable.relatedApp.app = "288";
			resp.properties["関連レコード一覧"].referenceTable.relatedApp.app = "284";
			resp.properties["関連レコード一覧_2"].referenceTable.relatedApp.app = "288";
			resp.properties["関連レコード一覧_1"].referenceTable.relatedApp.app = "288";
			resp.properties["関連レコード一覧_3"].referenceTable.relatedApp.app = "287";
			resp.app = 286;
			resp.revision = -1;
			console.log("get:", resp);
			kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'PUT', resp,
				function (resp) {
					// success
					console.log("PUT:", resp);
					kintone.api(kintone.api.url('/k/v1/preview/app/deploy', true), 'POST', {
						'apps': [
							{ 'app': 286, 'revision': -1 }]
					},
						function (resp) {
							// success
							console.log(resp);
						}, function (error) {
							// error
							console.log('POST err', error);
						});
				}, function (error) {
					// error
					console.log('PUT err', error);
				});
		}, function (error) {
			// error
			console.log('GET err', error);
		});
}
