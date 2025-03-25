import cls from './Popup.module.scss';

export type DropdownDirection =
    | 'top left'
    | 'bottom left'
    | 'top right'
    | 'bottom right';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
