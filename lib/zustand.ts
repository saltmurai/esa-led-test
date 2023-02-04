import create from "zustand";

const useGlobalStore = create((set) => ({
  param: [
    { id: 1, param: "Uin", unit: "V", min: 0, max: 0, correction: 0.01 },
    { id: 2, param: "Iin", unit: "A", min: 0, max: 0, correction: 0.01 },
    { id: 3, param: "Pin", unit: "W", min: 0, max: 0, correction: 0.01 },
    { id: 4, param: "Fin", unit: "HZ", min: 0, max: 0, correction: 0.01 },
	],
	updateParam: (newData: any) => {
		set({ param: newData });
	}
}));

export default useGlobalStore;
