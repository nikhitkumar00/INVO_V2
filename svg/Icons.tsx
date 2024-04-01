import { themeState } from "@/global/globalStates";
import Image from "next/image";
import { useRecoilState } from "recoil";
export const dynamic = "force-static";
export const useTheme = () => {
  const [theme] = useRecoilState(themeState);
  return { theme };
};
const Dashboard = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/home.png"
        alt="home"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </g>
    </svg>
  );
};

const Stocks = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/database--v2.png"
        alt="database-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </g>
    </svg>
  );
};

const Settings = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/settings.png"
        alt="settings-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2" />
        <circle cx="12" cy="12" r="3" />
      </g>
    </svg>
  );
};

const Billing = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/paid-bill.png"
        alt="bill-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14l2 2l4-4" />
      </g>
    </svg>
  );
};

const Contact = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/contact-card.png"
        alt="contact-icon"
      />
    );
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const Profile = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/user-male-circle--v1.png"
        alt="profile-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </g>
    </svg>
  );
};

const Logout = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/exit--v1.png"
        alt="logout-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5l-5-5m5 5H9"
      />
    </svg>
  );
};

const Billlog = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/order-history.png"
        alt="order-history-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="8" cy="16" r="6" />
        <path d="M9.5 17.5L8 16.25V14" />
      </g>
    </svg>
  );
};

const Add = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/add--v1.png"
        alt="add-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8m-4-4v8" />
      </g>
    </svg>
  );
};

const CameraError = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/no-camera.png"
        alt="no-camera-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="m2 2l20 20M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
        <path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" />
      </g>
    </svg>
  );
};

const Camera = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/camera.png"
        alt="camera-icon"
      />
    );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none" stroke="currentColor">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
        <circle cx="12" cy="13" r="3" />
      </g>
    </svg>
  );
};

const Close = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/cancel.png"
        alt="cancel-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
        />
      </g>
    </svg>
  );
};

const Pen = ({
  className,
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/edit--v1.png"
        alt="edit-icon"
        onClick={onClick}
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5Z"
      />
    </svg>
  );
};

const Income = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/refund-2.png"
        alt="income-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4m-8 4v6m3-3l-3-3l-3 3" />
      </g>
    </svg>
  );
};

const Expense = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/notes-and-coins.png"
        alt="expense-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" />
      </g>
    </svg>
  );
};

const Orders = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/shopping-cart.png"
        alt="orders-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <path d="M21 7h-3a2 2 0 0 1-2-2V2" />
        <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
        <path d="M7 8v8.8c0 .3.2.6.4.8c.2.2.5.4.8.4H15" />
        <path d="M3 12v8.8c0 .3.2.6.4.8c.2.2.5.4.8.4H11" />
      </g>
    </svg>
  );
};

const ChatIcon = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  if (theme === "Modern")
    return (
      <Image
        width={50}
        height={50}
        className={className}
        src="https://img.icons8.com/fluency/48/chat.png"
        alt="chat-icon"
      />
    );
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-8-7H7m10 4H7"
      />
    </svg>
  );
};

export {
  Add,
  Billing,
  Billlog,
  Camera,
  CameraError,
  ChatIcon,
  Close,
  Contact,
  Dashboard,
  Logout,
  Profile,
  Stocks,
  Settings,
  Pen,
  Expense,
  Orders,
  Income,
};
