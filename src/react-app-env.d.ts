/// <reference types="react-scripts" />

interface User {}

interface WindowSize {
	height: number;
	width: number;
}

interface WindowPageOffset {
	pageYOffset: number;
	pageXOffset: number;
}

interface RootState {
	userReducer: UserReducer;
	windowReducer: WindowReducer;
	appReducer: AppReducer;
}

interface UserReducer {
	user: User;
}

interface WindowReducer {
	window: WindowSize &
		WindowPageOffset & {
			target: EventTarget | null;
		};
}

interface AppReducer {
	app: {
		showSidebar: boolean;
	};
}

interface Carousel {
	tag: string;
	name: string;
	price: number;
	image: string;
	link: string;
}
