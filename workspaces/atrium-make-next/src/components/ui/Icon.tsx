import {
  Bath,
  Building,
  CheckCircle2,
  Clock3,
  Droplets,
  Euro,
  Facebook,
  FileText,
  Hammer,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Star,
  Users
} from "lucide-react";

import { IconKey } from "@/content/types";

type IconProps = {
  name: IconKey;
  className?: string;
};

const iconMap = {
  home: Home,
  bath: Bath,
  building: Building,
  hammer: Hammer,
  droplet: Droplets,
  "check-circle": CheckCircle2,
  clock: Clock3,
  "file-text": FileText,
  users: Users,
  star: Star,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  mail: Mail,
  phone: Phone,
  "message-circle": MessageCircle,
  send: Send,
  facebook: Facebook,
  euro: Euro,
  "map-pin": MapPin
} satisfies Record<IconKey, typeof Home>;

export function Icon({ name, className }: IconProps) {
  const LucideIcon = iconMap[name];
  return <LucideIcon className={className} />;
}
