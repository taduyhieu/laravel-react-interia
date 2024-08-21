import MainMenuItem from '@/Components/Menu/MainMenuItem';
import { Building, CircleGauge, Printer, Users } from 'lucide-react';

export default function MainMenu({ className }) {
    return (
        <div className={className}>

            <MainMenuItem
                text="Home"
                link={route('home')}
                icon={<Building size={20} />}
            />
            <MainMenuItem
                text="About"
                link={route("about")}
                icon={<CircleGauge size={20} />}
            />
        </div>
    );
}
