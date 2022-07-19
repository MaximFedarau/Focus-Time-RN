//Constants
import { flooring } from './flooring';

export const minutesToMillis = (min: number) => flooring(min * 1000 * 60);
