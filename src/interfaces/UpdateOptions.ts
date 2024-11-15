import type { Capability, RatingType } from '../constants';
import type { AndroidOptions } from './AndroidOptions';
import { CustomButtons } from './CustomButtons';
import type { FeedbackOptions } from './FeedbackOptions';
import type { ResourceObject } from './ResourceObject';

export interface UpdateOptions {
  android?: AndroidOptions;
  ratingType?: RatingType;
  forwardJumpInterval?: number;
  backwardJumpInterval?: number;
  progressUpdateEventInterval?: number; // in seconds

  // ios
  likeOptions?: FeedbackOptions;
  dislikeOptions?: FeedbackOptions;
  bookmarkOptions?: FeedbackOptions;

  capabilities?: Capability[];

  // android
  notificationCapabilities?: Capability[];

  icon?: ResourceObject;
  playIcon?: ResourceObject;
  pauseIcon?: ResourceObject;
  stopIcon?: ResourceObject;
  previousIcon?: ResourceObject;
  nextIcon?: ResourceObject;
  rewindIcon?: ResourceObject;
  forwardIcon?: ResourceObject;
  color?: number;
  /**
   * Android Only. Specifies custom Actions using the key customActionsList as a list of strings,
   * then specify the imported icons for the actions to keys for each action.
   * This is useful for android auto, as any extra buttons (when total > 5, > 4 extra buttons) will show up in a menu.
   * please note customActions will always show in the notification bar, because there is no other way
   * they will be called.
   * isCompat is always false unless there is a need to show them.
   */
  customActions?: CustomButtons;
}
