export const kintone: {
	events: {
		on(
			event: string | string[],
			handler: (event: any) => any
		): void;
		off(
			event: string | string[],
			handler: (event: any) => any
		): boolean;
		off(event: string | string[]): boolean;
		off(): boolean;
	}

	api: {
		url(
			path: string,
			detectGuestSpace?: boolean
		): string;
		urlForGet(
			path: string,
			params: any,
			detectGuestSpace?: boolean
		): string;

		getConcurrencyLimit(): Promise<{
			limit: number;
			running: number;
		}>;
	} & ((
		pathOrUrl: string,
		method: string,
		params: any
	) => (Promise<any>)) & ((
		pathOrUrl: string,
		method: string,
		params: any,
		callback?: (resp: any) => void,
		errback?: (err: any) => void
	) => (void));

	getRequestToken(): string;

	proxy(
		url: string,
		method: string,
		headers: any,
		data: any
	): Promise<any>;

	proxy(
		url: string,
		method: string,
		headers: any,
		data: any,
		callback: (resp: any) => void,
		errback: (err: any) => void
	): void;

	proxy: {
		upload(
			url: string,
			method: string,
			headers: any,
			data: any,
			callback: (resp: any) => void,
			errback: (err: any) => void
		): void;

		upload(
			url: string,
			method: string,
			headers: any,
			data: any
		): Promise<any>;
	}

	app: {
		getFieldElements(
			fieldCode: string
		): HTMLElement[] | null;
		getHeaderMenuSpaceElement(): HTMLElement | null;
		getHeaderSpaceElement(): HTMLElement | null;
		getId(): number | null;
		getLookupTargetAppId(
			fieldCode: string
		): string | null;
		getQuery(): string | null;
		getQueryCondition(): string | null;
		getRelatedRecordsTargetAppId(
			fieldCode: string
		): string | null;

		record: {
			getId(): number | null;
			get(): any | null;
			getHeaderMenuSpaceElement(): HTMLElement | null;
			getFieldElement(
				fieldCode: string
			): HTMLElement | null;
			set(record: any): void;
			getSpaceElement(
				id: string
			): HTMLElement | null;
			setFieldShown(
				fieldCode: string,
				isShwon: boolean
			): void;
			setGroupFieldOpen(
				fieldCode: string,
				isOpen: boolean
			): void;
		}
	}

	mobile: {
		app: {
			getHeaderSpaceElement(): HTMLElement | null;
			getId(): number | null;
			getLookupTargetAppId(
				fieldCode: string
			): string | null;
			getQuery(): string | null;
			getQueryCondition(): string | null;
			getRelatedRecordsTargetAppId(
				fieldCode: string
			): string | null;

			record: {
				getId(): number | null;
				get(): any | null;
				set(record: any): void;
				getSpaceElement(
					id: string
				): HTMLElement | null;
				setFieldShown(
					fieldCode: string,
					isShwon: boolean
				): void;
				setGroupFieldOpen(
					fieldCode: string,
					isOpen: boolean
				): void;
			}
		}

		portal: {
			getContentSpaceElement(): HTMLElement | null;
		}
	}

	plugin: {
		app: {
			getConfig(pluginId: string): any;
			setConfig(
				config: any,
				callback?: () => void
			): void;

			proxy(
				pluginId: string,
				url: string,
				method: string,
				headers: any,
				data: any
			): Promise<any>;

			proxy(
				pluginId: string,
				url: string,
				method: string,
				headers: any,
				data: any,
				callback: (resp: any) => void,
				error: (err: any) => void
			): void;

			setProxyConfig(
				url: string,
				method: string,
				headers: any,
				data: any,
				callback?: () => void
			): void;

			getProxyConfig(
				url: string,
				method: string
			): any;

			proxy: {
				upload(
					pluginId: any,
					url: string,
					method: string,
					headers: any,
					data: any
				): Promise<any>;

				upload(
					pluginId: any,
					url: string,
					method: string,
					headers: any,
					data: any,
					callback: (resp: any) => void,
					error: (err: any) => void
				): void;
			}
		}
	}

	portal: {
		getContentSpaceElement(): HTMLElement | null;
	}

	LoginUser: {
		id: string;
		code: string;
		name: string;
		email: string;
		url: string;
		employeeNumber: string;
		phone: string;
		mobilePhone: string;
		extensionNumber: string;
		timezone: string;
		isGuest: boolean;
		language: string;
	}

	getLoginUser: () => LoginUser;
	getUiVersion: () => 1 | 2;

	fieldTypes: 
		{
			type: "SINGLE_LINE_TEXT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxLength?: number | string
			minLength?: number | string
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "RICH_TEXT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			maxLength?: number | string
			minLength?: number | string
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "MULTI_LINE_TEXT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxLength?: number | string
			minLength?: number | string
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "NUMBER";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxValue?: number | string
			minValue?: number | string
			defaultValue?: string | string[]
			digit?: boolean | string
			unit?: string
			unitPosition?: 'BEFORE' | 'AFTER'
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "CALC";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxValue?: number | string
			minValue?: number | string
			expression?: string
			hideExpression?: boolean | string
			digit?: boolean | string
			unit?: string
			unitPosition?: 'BEFORE' | 'AFTER'
			format?: string
			value?: string;
			disabled?: boolean;
		}|{
			type: "RADIO_BUTTON";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options?: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "DROP_DOWN";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options?: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "DATE";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxValue?: number | string
			minValue?: number | string
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "TIME";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxValue?: number | string
			minValue?: number | string
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "DATETIME";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			maxValue?: number | string
			minValue?: number | string
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "LINK";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: string;
			disabled?: boolean;
			error?: string;
		}|{
			type: "CHECK_BOX";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			digit?: boolean | string
			unit?: string
			value?: string[];
			disabled?: boolean;
			error?: string;
		}|{
			type: "MULTI_SELECT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			value?: string[];
			disabled?: boolean;
			error?: string;
		}|{
			type: "USER_SELECT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options?: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			value?: Array<{ code: string; name: string }>;
			disabled?: boolean;
			error?: string;
		}|{
			type: "ORGANIZATION_SELECT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options?: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			value?: Array<{ code: string; name: string }>;
			disabled?: boolean;
			error?: string;
		}|{
			type: "GROUP_SELECT";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			options?: { [name: string]: { label: string, index: string | number } }
			align?: 'HORIZONTAL' | 'VERTICAL'
			value?: Array<{ code: string; name: string }>;
			disabled?: boolean;
			error?: string;
		}|{
			type: "FILE";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: Array<{
				contentType: string;
				fileKey: string;
				name: string;
				size: string;
			}>;
			disabled?: boolean;
			error?: string;
		}|{
			type: "__ID__";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: string;
		}|{
			type: "__REVISION__";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: string;
		}|{
			type: "MODIFIER";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: { code: string; name: string };
		}|{
			type: "CREATOR";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: { code: string; name: string };
		}|{
			type: "RECORD_NUMBER";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: string;
			error?: string;
		}|{
			type: "UPDATED_TIME";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: string;
			error?: string;
		}|{
			type: "CREATED_TIME";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			defaultValue?: string | string[]
			value?: string;
			error?: string;
		}|{
			type: "SUBTABLE";
			relatedApp: {
				app: string | number,
				code: string
			},
			condition: {
				field?: string,
				relatedField?: string
			},
			filterCond?: string,
			displayFields?: string[],
			sort?: string
		}|{
			type: "NUMBER";
			code: string;
			label: string;
			noLabel?: boolean;
			required?: boolean;
			unique?: boolean;
			lookup: {
				relatedApp: {
					app: string | number,
					code: string
				},
				relatedKeyField: string,
				fieldMappings: { field: string, relatedfield: string }[],
				filterCond?: string,
				lookupPickerFields?: string[],
				sort?: string
			}
			value?: string;
			error?: string;
		}
	
}
