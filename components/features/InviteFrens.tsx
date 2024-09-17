import { Button } from '../ui/button';
import { Home, Trophy, Users, ClipboardList } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { useNavigation } from '../Navigation';

const Avatar = ({ children }: { children: React.ReactNode }) => (
  <div className="h-12 w-12 mr-4 bg-[#4B3D2F] text-white flex items-center justify-center rounded-full">
    {children}
  </div>
);

export default function InviteFrens() {
  const { currentPath, navigate } = useNavigation()
  return (
    <div className="bg-black text-white w-[375px] h-[812px] flex flex-col p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-1">Invite Frens!</h1>
        <p className="text-gray-400">To earn more BMP</p>
      </div>

      <div className="flex justify-center mb-6">
        <Users size={128} strokeWidth={1} />
      </div>

      <p className="text-center mb-8 text-gray-400" style={{ fontWeight: 350 }}>
        You'll receive <span className="font-bold text-white">10%</span> from direct Frens, and <span className="font-bold text-white">5%</span> from their Frens!
      </p>

      <h2 className="text-xl font-bold mb-4">75 Friends</h2>

      <div className="space-y-4 mb-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar>
                <span>BI</span>
              </Avatar>
              <p className="font-bold">BitGraf</p>
            </div>
            <p className="text-gray-400">8,556 BMP</p>
          </div>
        ))}
      </div>

      <Button className="w-full mb-8 py-9 text-lg bg-white text-black hover:bg-gray-200">
        Invite friends
      </Button>

      <div className="mt-auto flex justify-between">
        <NavItem href="/" icon={<Home size={28} />} label="Home" />
        <NavItem href="/leaderboard" icon={<Trophy size={28} />} label="LeaderBoard" />
        <NavItem href="/invite-frens" icon={<Users size={28} />} label="Frens" active />
        <NavItem href="/tasks" icon={<ClipboardList size={28} />} label="Tasks" />
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ href, icon, label, active = false }: NavItemProps) {
  return (
    <Link href={href} className={`flex flex-col items-center ${active ? 'text-white' : 'text-gray-500'}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}