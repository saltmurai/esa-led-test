import { FaEraser } from "react-icons/fa";

export default function DriverInfo() {
  return (
    <>
      <div className="flex justify-between gap-4 mt-5">
        <div className="overflow-x-auto flex-1">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Driver name</th>
                <th>Single Test</th>
                <th>One to any</th>
                <th>Test steps</th>
                <th>Work count</th>
                <th>Ok count</th>
                <th>Ng count</th>
                <th>Qualify rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Driver 1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn btn-primary text-white">
          <FaEraser size={24}></FaEraser>
          <div className="ml-2">CLEAR</div>
        </div>
      </div>
    </>
  );
}
