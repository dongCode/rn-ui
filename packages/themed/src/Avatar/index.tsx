import { Avatar, AvatarProps } from '@dplus/rn-ui/dist/Avatar/Avatar';
import {
  Accessory,
  AccessoryProps,
} from '@dplus/rn-ui/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';

export default Object.assign(withTheme<AvatarProps>(Avatar, 'Avatar'), {
  Accessory: withTheme<AccessoryProps>(Accessory, 'AvatarAccessory'),
});

export type { AccessoryProps, AvatarProps };
