interface ModalState {
	alert?: boolean;
	dialog?: boolean;
}

type ModalType = keyof ModalState;

export const useModalStore = defineStore("modal", {
	state: (): ModalState => ({}),
	actions: {
		open(modal: ModalType) {
			this[modal] = true;
		},
		close(modal: ModalType) {
			this[modal] = false;
		},
		toggle(modal: ModalType) {
			this[modal] = !this[modal];
		},
	},
});
