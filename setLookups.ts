var kintone = kintone || {};


/** 
 * 顧客管理
 * 2020/12/08　仙台支店から福島支店へアプリをコピーしたあと、lookupを変更したときに作ったコード
 */
const setKokyakukanriApp = () => {
	kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { "app": 106 },
		function (resp) {
			// success
			resp = resp;
			resp.properties.lookup.lookup.relatedApp.app = "283";
			resp.properties.lookup.lookup.relatedApp.code = "fukushima";
			resp.app = 284;
			resp.revision = -1;
			console.log("get:", resp);
			kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'PUT', resp,
				function (resp) {
					// success
					console.log("PUT:", resp);
					kintone.api(kintone.api.url('/k/v1/preview/app/deploy', true), 'POST', {
						'apps': [
							{ 'app': 284, 'revision': -1 }]
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
};