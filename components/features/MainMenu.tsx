import { Button } from '../ui/button';
import { useNavigation } from '../Navigation';
import { ChevronDown, Send, Twitter, Youtube, Wallet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MainMenuProps {
  username?: string;
  day?: number;
  bmpBalance?: number;
  farmingAmount?: number;
  rewards?: number;
  tasks?: { completed: number; total: number };
  invites?: number;
}

export default function MainMenu({
  username = 'User',
  day = 1,
  bmpBalance = 0,
  farmingAmount = 0,
  rewards = 2500,
  tasks = { completed: 8, total: 10 },
  invites = 114
}: MainMenuProps) {
  const { currentPath, navigate } = useNavigation()
  return (
    <div className="bg-black text-white w-[375px] h-[812px] overflow-hidden relative p-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coin%20logo%20(1)-H4MpUZ8EVavL7pSK1zctIymf21QgF9.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <p className="font-semibold text-sm leading-tight">{username}</p>
            <p className="text-[10px] text-gray-500 leading-tight">Day {day}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-sm leading-tight">{bmpBalance?.toLocaleString() ?? '0'}</p>
          <p className="text-[10px] text-gray-500 leading-tight">BMP</p>
        </div>
      </div>

      {/* Connect Button */}
      <Button 
        variant="ghost" 
        className="w-full flex items-center justify-center text-white text-sm font-semibold py-2 mb-4"
      >
        <Wallet className="w-5 h-5 mr-2" />
        Connect
      </Button>

      {/* Farm */}
      <div className="text-[10px] text-gray-500 mb-1">Farm</div>

      {/* Farming Section with Rotating ALPACA Logo and Circular Progress */}
      <div className="bg-black p-3 mb-4 flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <p className="text-base font-semibold mr-2">Farming: {farmingAmount.toFixed(2)}</p>
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="url(#paint0_linear_683_8995)"/>
              <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="black"/>
              <path d="M14.2986 4.82347V15.2082C14.2986 15.5882 14.1145 15.9336 13.8039 16.1523L5.50836 21.9664C4.82953 22.4384 3.86306 22.07 3.71349 21.2526C3.54091 20.2625 3.77102 19.0996 4.46135 17.8447L8.05109 11.3859L11.4337 5.29551C11.6984 4.82347 11.986 4.409 12.2851 4.0521C12.9755 3.24618 14.2986 3.76427 14.2986 4.82347Z" fill="url(#paint1_linear_683_8995)"/>
              <path d="M24.8852 21.9664L16.5897 16.1523C16.2791 15.9336 16.095 15.5882 16.095 15.2082V4.82347C16.095 3.76427 17.4181 3.24618 18.1084 4.0521C18.4076 4.409 18.6952 4.82347 18.9599 5.29551L22.3425 11.3859L25.9322 17.8447C26.6226 19.0996 26.8527 20.2625 26.6801 21.2526C26.5305 22.07 25.564 22.4384 24.8852 21.9664Z" fill="url(#paint2_linear_683_8995)"/>
              <path d="M7.38119 22.3839L14.5025 17.6664C14.8847 17.4133 15.51 17.4133 15.8921 17.6664L23.0134 22.3839C24.9009 23.638 24.5882 24.662 22.3187 24.662H8.06438C5.80639 24.6505 5.49374 23.6265 7.38119 22.3839Z" fill="url(#paint3_linear_683_8995)"/>
              <defs>
                <linearGradient id="paint0_linear_683_8995" x1="2.08992" y1="30" x2="30" y2="-13.1707" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2296FC"/>
                  <stop offset="0.38" stopColor="#2296FC"/>
                  <stop offset="1" stopColor="white"/>
                </linearGradient>
                <linearGradient id="paint1_linear_683_8995" x1="8.97859" y1="3.65845" x2="8.97859" y2="22.1749" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#69D7FF"/>
                </linearGradient>
                <linearGradient id="paint2_linear_683_8995" x1="21.415" y1="3.65845" x2="21.415" y2="22.1749" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#69D7FF"/>
                </linearGradient>
                <linearGradient id="paint3_linear_683_8995" x1="15.1968" y1="17.4766" x2="15.1968" y2="24.662" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#69D7FF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-[10px] text-gray-500">06:44:44</p>
        </div>
        <div className="relative w-12 h-12">
          <svg className="w-full h-full" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#333" strokeWidth="4"/>
            <path
              d="M24 4 A 20 20 0 0 1 44 24"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 animate-spin-very-fast">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%205151-kHhtn6OBg7hQwyR4kxRpmpdSM5Tcol.svg"
                alt="ALPACA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-black p-3 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold mb-1">Rewards</p>
            <div className="flex items-center">
              <span className="text-white mr-1">+{(rewards / 1000).toFixed(1)}K</span>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4553 8.82337L13.9088 8.22599L13.4553 8.82337C13.7976 9.08322 14.2134 9.17627 14.6362 9.2709C14.6681 9.27803 14.6999 9.28516 14.7318 9.29237L15.2051 9.39946C16.1453 9.61218 16.7629 9.75413 17.1809 9.91885C17.5746 10.074 17.6063 10.1788 17.6155 10.2091C17.6157 10.2099 17.6159 10.2107 17.6161 10.2113L17.6162 10.2115C17.6272 10.247 17.6632 10.3625 17.4203 10.7483C17.172 11.1427 16.7489 11.6405 16.1092 12.3886L15.7865 12.7659C15.7653 12.7906 15.7442 12.8153 15.7231 12.8398C15.4319 13.179 15.156 13.5004 15.029 13.9086L15.7452 14.1313L15.029 13.9086C14.903 14.3138 14.9449 14.7375 14.9896 15.1905C14.9929 15.2233 14.9961 15.2563 14.9994 15.2894L15.0481 15.7928C15.1447 16.7898 15.2074 17.4556 15.1863 17.9302C15.1657 18.3921 15.0715 18.4616 15.0553 18.4735C15.0549 18.4738 15.0546 18.4741 15.0543 18.4743C15.0542 18.4743 15.0542 18.4743 15.0542 18.4744C15.052 18.477 14.9881 18.5522 14.5735 18.4334C14.1427 18.3099 13.5627 18.0453 12.6824 17.6399L12.2393 17.4359L11.9256 18.1171L12.2393 17.4359C12.2089 17.4219 12.1785 17.4078 12.1482 17.3938C11.7554 17.2117 11.3653 17.031 10.9375 17.031C10.5097 17.031 10.1196 17.2117 9.72683 17.3938C9.69649 17.4078 9.66614 17.4219 9.63575 17.4359L9.94943 18.1171L9.63575 17.4359L9.19261 17.6399C8.31226 18.0453 7.73231 18.3099 7.30152 18.4334C6.88686 18.5522 6.82302 18.477 6.82081 18.4744L6.82075 18.4743C6.82045 18.4741 6.8201 18.4738 6.8197 18.4735C6.80348 18.4616 6.70929 18.3921 6.68871 17.9302C6.66758 17.4556 6.73026 16.7898 6.82687 15.7928L6.87565 15.2894C6.87886 15.2563 6.88212 15.2233 6.88536 15.1905C6.93011 14.7375 6.97198 14.3138 6.84597 13.9086C6.71902 13.5004 6.44311 13.179 6.1519 12.8398C6.13083 12.8153 6.10967 12.7906 6.08848 12.7659L5.76582 12.3886C5.12614 11.6405 4.70298 11.1427 4.45468 10.7483C4.21185 10.3625 4.24779 10.247 4.25883 10.2115L4.25888 10.2113C4.25909 10.2107 4.25931 10.2099 4.25955 10.2091C4.26871 10.1788 4.3004 10.074 4.69413 9.91885C5.11211 9.75413 5.72974 9.61218 6.66992 9.39946L7.1432 9.29237L6.97769 8.56086L7.1432 9.29237C7.17508 9.28516 7.20694 9.27803 7.23877 9.2709C7.66159 9.17627 8.07735 9.08322 8.41966 8.82337C8.75754 8.56687 8.96576 8.19144 9.18234 7.80093C9.19867 7.77148 9.21505 7.74195 9.23153 7.71238L9.47526 7.27516C9.95851 6.40825 10.2812 5.83332 10.5635 5.46474C10.7001 5.28632 10.7966 5.19862 10.859 5.15684C10.9067 5.12492 10.9255 5.12497 10.9366 5.125L10.9375 5.125L10.9384 5.125C10.9495 5.12497 10.9683 5.12492 11.016 5.15684C11.0784 5.19862 11.1749 5.28631 11.3115 5.46474C11.5938 5.83332 11.9165 6.40824 12.3997 7.27515L12.6435 7.71238C12.66 7.74195 12.6763 7.77148 12.6927 7.80093C12.9092 8.19144 13.1175 8.56687 13.4553 8.82337Z" stroke="white" strokeWidth="1.5"/>
                <path d="M4.36613 1.75C4.36613 1.75 4.61807 3.0255 5.17045 3.57416C5.72283 4.12281 7 4.36613 7 4.36613C7 4.36613 5.7245 4.61807 5.17584 5.17045C4.62719 5.72283 4.38387 7 4.38387 7C4.38387 7 4.13193 5.7245 3.57955 5.17584C3.02717 4.62719 1.75 4.38387 1.75 4.38387C1.75 4.38387 3.0255 4.13193 3.57416 3.57955C4.12281 3.02717 4.36613 1.75 4.36613 1.75Z" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
                <path d="M2.75752 13.2632C2.75752 13.2632 2.91664 14.0688 3.26551 14.4153C3.61438 14.7618 4.42101 14.9155 4.42101 14.9155C4.42101 14.9155 3.61544 15.0746 3.26891 15.4235C2.92239 15.7723 2.76872 16.579 2.76872 16.579C2.76872 16.579 2.6096 15.7734 2.26073 15.4269C1.91186 15.0804 1.10522 14.9267 1.10522 14.9267C1.10522 14.9267 1.9108 14.7676 2.25732 14.4187C2.60384 14.0698 2.75752 13.2632 2.75752 13.2632Z" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
                <path d="M15.75 4.375H17.5M16.625 5.25L16.625 3.5" stroke="white" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold mb-1">Tasks</p>
            <div className="flex items-center">
              <span className="text-white mr-1">{tasks.completed}/{tasks.total}</span>
              <svg width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2 9.075V5.56C16.2 3.96385 16.2 3.16578 15.8894 2.55613C15.6161 2.01987 15.1801 1.58387 14.6439 1.31063C14.0342 1 13.2362 1 11.64 1H5.56C3.96385 1 3.16578 1 2.55613 1.31063C2.01987 1.58387 1.58387 2.01987 1.31063 2.55613C1 3.16578 1 3.96385 1 5.56V15.44C1 17.0361 1 17.8342 1.31063 18.4439C1.58387 18.9801 2.01987 19.4161 2.55613 19.6894C3.16578 20 3.96385 20 5.56 20H8.6M10.5 9.55H4.8M6.7 13.35H4.8M12.4 5.75H4.8M14.3 19.05V16.2M14.3 16.2V13.35M14.3 16.2H11.45M14.3 16.2H17.15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold mb-1">Invites</p>
            <div className="flex items-center">
              <span className="text-white mr-1">+{invites}</span>
              <svg width="16" height="16" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9444 20V13.6667M15.7778 16.8333H22.1111M11.5556 13.6667H7.33333C5.36602 13.6667 4.38237 13.6667 3.60645 13.9881C2.57188 14.4166 1.74993 15.2386 1.3214 16.2731C1 17.049 1 18.0327 1 20M15.25 1.30691C16.7974 1.93327 17.8889 3.45027 17.8889 5.22222C17.8889 6.99417 16.7974 8.51118 15.25 9.13753M13.1389 5.22222C13.1389 7.55409 11.2485 9.44444 8.91667 9.44444C6.5848 9.44444 4.69444 7.55409 4.69444 5.22222C4.69444 2.89035 6.5848 1 8.91667 1C11.2485 1 13.1389 2.89035 13.1389 5.22222Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Telegram Channel */}
      <div className="bg-black p-4 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-white text-lg font-bold mb-1">Our telegram channel</h2>
            <p className="text-gray-400 text-sm">Join to get latest updates</p>
          </div>
          <Button variant="secondary" className="bg-white text-black hover:bg-white hover:text-black w-[68px] h-[31px] rounded-[9px] px-0 py-0">
            Join
          </Button>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>

      {/* Spacer to push content down */}
      <div className="flex-grow"></div>

      {/* Your Rewards */}
      <div className="bg-black p-4">
        <h2 className="text-lg font-bold mb-4">Your Rewards</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Send className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-sm text-gray-400">Add PNT in Telegram name</span>
            </div>
            <span className="text-sm text-gray-400">+5,500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Twitter className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-sm text-gray-400">Add PNT in Telegram name</span>
            </div>
            <span className="text-sm text-gray-400">+5,500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Youtube className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-sm text-gray-400">Add PNT in Telegram name</span>
            </div>
            <span className="text-sm text-gray-400">+5,500</span>
          </div>
        </div>
        <div className="w-full h-px bg-gray-700 my-4"></div>
        <Button variant="ghost" className="w-full text-sm text-gray-400">
          View More <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-around py-3">
        <Button variant="ghost" className="flex flex-col items-center space-y-1 h-auto">
          <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M234.667 130.175V146.399C234.667 188.009 234.667 208.814 222.17 221.74C209.673 234.667 189.56 234.667 149.333 234.667H106.667C66.4402 234.667 46.3269 234.667 33.8302 221.74C21.3334 208.814 21.3334 188.009 21.3334 146.399V130.175C21.3334 105.765 21.3334 93.5603 26.8715 83.4426C32.4096 73.3249 42.5275 67.0455 62.7631 54.4867L84.0964 41.2466C105.487 27.9711 116.182 21.3333 128 21.3333C139.818 21.3333 150.513 27.9711 171.904 41.2466L193.237 54.4867C213.473 67.0455 223.59 73.3249 229.129 83.4426" stroke="white" strokeWidth="16" strokeLinecap="round"/>
            <path d="M160 192H96" stroke="white" strokeWidth="16" strokeLinecap="round"/>
          </svg>
          <span className="text-[9px] text-white font-normal">Home</span>
        </Button>
        <Link href="/wall-of-fame">
          <Button variant="ghost" className="flex flex-col items-center space-y-1 h-auto">
            <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.333 234.667H90.6666L94.285 216.575C95.2822 211.589 99.6599 208 104.745 208H151.255C156.34 208 160.718 211.589 161.715 216.575L165.333 234.667Z" stroke="grey" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M202.667 53.3333L212.785 56.7062C223.346 60.2264 228.626 61.9865 231.646 66.1769C234.666 70.3672 234.666 75.9331 234.666 87.065L234.666 87.8386C234.666 97.0198 234.666 101.61 232.456 105.366C230.246 109.122 226.233 111.352 218.207 115.811L186.667 133.333" stroke="grey" strokeWidth="14"/>
              <path d="M53.3328 53.3333L43.2141 56.7062C32.6535 60.2264 27.3732 61.9865 24.3531 66.1769C21.3329 70.3672 21.3331 75.9331 21.3334 87.065L21.3334 87.8386C21.3336 97.0198 21.3338 101.61 23.5438 105.366C25.7538 109.122 29.7667 111.352 37.7925 115.811L69.3328 133.333" stroke="grey" strokeWidth="14"/>
              <path d="M118.89 64.2401C122.943 56.9689 124.97 53.3333 128 53.3333C131.03 53.3333 133.057 56.9689 137.11 64.2401L138.159 66.1213C139.31 68.1875 139.886 69.2207 140.784 69.9023C141.682 70.584 142.8 70.837 145.037 71.3431L147.073 71.8038C154.944 73.5847 158.88 74.4752 159.816 77.4861C160.753 80.497 158.07 83.6344 152.704 89.9091L151.315 91.5325C149.791 93.3155 149.028 94.2071 148.685 95.31C148.342 96.413 148.458 97.6025 148.688 99.9815L148.898 102.147C149.709 110.519 150.115 114.705 147.664 116.566C145.212 118.427 141.527 116.73 134.158 113.337L132.251 112.459C130.157 111.495 129.11 111.013 128 111.013C126.89 111.013 125.843 111.495 123.749 112.459L121.842 113.337C114.473 116.73 110.788 118.427 108.336 116.566C105.885 114.705 106.291 110.519 107.102 102.147L107.312 99.9815C107.542 97.6025 107.658 96.413 107.315 95.31C106.972 94.2071 106.209 93.3155 104.685 91.5325L103.296 89.9091C97.9304 83.6344 95.2474 80.497 96.1837 77.4861C97.1201 74.4752 101.056 73.5847 108.927 71.8038L110.963 71.3431C113.2 70.837 114.318 70.584 115.216 69.9023C116.114 69.2207 116.69 68.1875 117.841 66.1213L118.89 64.2401Z" stroke="grey" strokeWidth="14"/>
              <path d="M192 234.667H64" stroke="grey" strokeWidth="14" strokeLinecap="round"/>
              <path d="M181.333 26.197C189.243 27.7064 193.932 29.3652 197.983 34.3556C203.058 40.6051 202.79 47.3597 202.253 60.869C200.325 109.435 189.441 170.667 128.002 170.667C66.5623 170.667 55.6782 109.435 53.7501 60.869C53.2138 47.3597 52.9456 40.6051 58.0199 34.3556C63.0943 28.106 69.1675 27.0813 81.3139 25.0319C93.3039 23.0089 108.977 21.3333 128.002 21.3333C135.663 21.3333 142.781 21.6051 149.333 22.0618" stroke="grey" strokeWidth="14" strokeLinecap="round"/>
              <path d="M128 170.667V202.667" stroke="grey" strokeWidth="14" strokeLinecap="round"/>
            </svg>
            <span className="text-[9px] text-gray-400 font-normal">LeaderBoard</span>
          </Button>
        </Link>
        <Button variant="ghost" className="flex flex-col items-center space-y-1 h-auto">
          <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M234.667 224V202.667C234.667 182.786 221.069 166.081 202.667 161.344M165.333 35.1014C180.97 41.4309 192 56.7607 192 74.6667C192 92.5727 180.97 107.902 165.333 114.232M181.333 224C181.333 204.12 181.333 194.18 178.086 186.339C173.755 175.884 165.449 167.578 154.995 163.248C147.154 160 137.214 160 117.333 160H85.3334C65.4532 160 55.5131 160 47.6722 163.248C37.2177 167.578 28.9116 175.884 24.5812 186.339C21.3334 194.18 21.3334 204.12 21.3334 224M144 74.6667C144 98.2308 124.898 117.333 101.333 117.333C77.7692 117.333 58.6667 98.2308 58.6667 74.6667C58.6667 51.1025 77.7692 32 101.333 32C124.898 32 144 51.1025 144 74.6667Z" stroke="grey" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[9px] text-gray-400 font-normal">Frens</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1 h-auto">
          <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 128.64V80.64C224 57.92 224 46.56 220.16 38.08C216.8 30.72 211.28 24.64 203.92 20.8C195.44 16.96 184.08 16.96 161.36 16.96H75.84C53.12 16.96 41.76 16.96 33.28 20.8C25.92 24.64 20.4 30.72 16.56 38.08C12.72 46.56 12.72 57.92 12.72 80.64V218.56C12.72 241.28 12.72 252.64 16.56 261.12C20.4 268.48 25.92 274.56 33.28 278.4C41.76 282.24 53.12 282.24 75.84 282.24H118.24M144.8 136H65.12M92 189.76H65.12M171.36 82.24H65.12M197.76 268.64V229.12M197.76 229.12V189.6M197.76 229.12H158.24M197.76 229.12H237.28" stroke="grey" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[9px] text-gray-400 font-normal">Tasks</span>
        </Button>
      </div>
    </div>
  );
}