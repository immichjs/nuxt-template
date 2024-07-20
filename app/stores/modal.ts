import { defineStore } from "pinia";
interface ModalState {
	alertDialog?: boolean;
}

type ModalType = keyof ModalState;

export const useModalStore = defineStore("modalStore", {
	state: (): { modals: ModalState } => ({
		modals: {},
	}),
	actions: {
		open(modal: ModalType) {
			this.modals[modal] = true;
		},
		close(modal: ModalType) {
			this.modals[modal] = false;
		},
		toggle(modal: ModalType) {
			this.modals[modal] = !this.modals[modal];
		},
	},
});
