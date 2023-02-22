import create from "zustand";

// set param to value of data fetch from /api/fetchData



const useGlobalStore = create((set) => ({
  param: [
    { id: 1, param: "A_AC", unit: "A", min: 0, max: 10, correction: 0.01 },
    { id: 2, param: "A_DC", unit: "A", min: 0, max: 2, correction: 0.01 },
    { id: 3, param: "Freq", unit: "HZ", min: 0, max: 0, correction: 0.01 },
    { id: 4, param: "PF_AC", unit: "", min: 0, max: 0, correction: 0.01 },
    { id: 5, param: "PF_DC", unit: "", min: 0, max: 0, correction: 0.01 },
    { id: 6, param: "P_AC", unit: "W", min: 0, max: 0, correction: 0.01 },
    { id: 7, param: "P_DC", unit: "W", min: 0, max: 0, correction: 0.01 },
    { id: 8, param: "V_AC", unit: "V", min: 180, max: 200, correction: 0.01 },
    { id: 9, param: "V_DC", unit: "V", min: 180, max: 200, correction: 0.01 },
	],
  updateParam: (newData: any) => {
    set({ param: newData });
  },
}));

export const data = [
    { id: 1, param: "A_AC", unit: "A", min: 0, max: 10, correction: 0.01 },
    { id: 2, param: "A_DC", unit: "A", min: 0, max: 2, correction: 0.01 },
    { id: 3, param: "Freq", unit: "HZ", min: 0, max: 0, correction: 0.01 },
    { id: 4, param: "PF_AC", unit: "", min: 0, max: 0, correction: 0.01 },
    { id: 5, param: "PF_DC", unit: "", min: 0, max: 0, correction: 0.01 },
    { id: 6, param: "P_AC", unit: "W", min: 0, max: 0, correction: 0.01 },
    { id: 7, param: "P_DC", unit: "W", min: 0, max: 0, correction: 0.01 },
    { id: 8, param: "V_AC", unit: "V", min: 180, max: 200, correction: 0.01 },
    { id: 9, param: "V_DC", unit: "V", min: 180, max: 200, correction: 0.01 },
]
	;
export default useGlobalStore;
