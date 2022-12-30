import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-100 bg-white flex h-16 justify-between items-center">
      <Image src="/esa-logo.png" width={90} height={45} alt="ESA-LOGO" />
      <div>
        <div className="btn">Export Profile</div>
        <div className="btn">Import Profile</div>
        <div className="btn">Add profile</div>
      </div>
    </div>
  );
}
