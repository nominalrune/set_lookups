export const kintone:{
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
			detectGuestSpace ?: boolean
		): string;
		urlForGet(
			path: string,
			params: any,
			detectGuestSpace ?: boolean
		): string;

		getConcurrencyLimit(): Promise<{
			limit: number;
			running: number;
		}>;
	}&((
		pathOrUrl: string,
		method: string,
		params: any
    )=>(Promise<any>))&((
		pathOrUrl: string,
		method: string,
		params: any,
		callback?: (resp: any) => void,
		errback?: (err: any) => void
    )=>(void));

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
				callback ?: () => void
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
				callback ?: () => void
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

	fieldTypes: {
		SingleLineText: {
			type ?: "SINGLE_LINE_TEXT";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		RichText: {
			type ?: "RICH_TEXT";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		MultiLineText: {
			type ?: "MULTI_LINE_TEXT";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		Number: {
			type ?: "NUMBER";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		Calc: {
			type: "CALC";
			value: string;
			disabled ?: boolean;
		}

		RadioButton: {
			type ?: "RADIO_BUTTON";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		DropDown: {
			type ?: "DROP_DOWN";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		Date: {
			type ?: "DATE";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		Time: {
			type ?: "TIME";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		DateTime: {
			type ?: "DATETIME";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		Link: {
			type ?: "LINK";
			value: string;
			disabled ?: boolean;
			error ?: string;
		}

		CheckBox: {
			type ?: "CHECK_BOX";
			value: string[];
			disabled ?: boolean;
			error ?: string;
		}

		MultiSelect: {
			type ?: "MULTI_SELECT";
			value: string[];
			disabled ?: boolean;
			error ?: string;
		}

		UserSelect: {
			type ?: "USER_SELECT";
			value: Array<{ code: string; name: string }>;
			disabled ?: boolean;
			error ?: string;
		}

		OrganizationSelect: {
			type ?: "ORGANIZATION_SELECT";
			value: Array<{ code: string; name: string }>;
			disabled ?: boolean;
			error ?: string;
		}

		GroupSelect: {
			type ?: "GROUP_SELECT";
			value: Array<{ code: string; name: string }>;
			disabled ?: boolean;
			error ?: string;
		}

		File: {
			type: "FILE";
			value: Array<{
				contentType: string;
				fileKey: string;
				name: string;
				size: string;
			}>;
			disabled ?: boolean;
			error ?: string;
		}

		Id: {
			type: "__ID__";
			value: string;
		}

		Revision: {
			type: "__REVISION__";
			value: string;
		}

		/**
		 * field type of UserField is MODIFIER.
		 * So error property not exists.
		 */
		Modifier: {
			type: "MODIFIER";
			value: { code: string; name: string };
		}

		/**
		 * field type of UserField is CREATOR.
		 * So error property not exists.
		 */
		Creator: {
			type: "CREATOR";
			value: { code: string; name: string };
		}

		RecordNumber: {
			type: "RECORD_NUMBER";
			value: string;
			error ?: string;
		}

		UpdatedTime: {
			type: "UPDATED_TIME";
			value: string;
			error ?: string;
		}

		CreatedTime: {
			type: "CREATED_TIME";
			value: string;
			error ?: string;
		}
	}
}
