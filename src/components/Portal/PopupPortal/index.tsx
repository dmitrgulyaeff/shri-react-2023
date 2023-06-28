import Portal from "..";
import { POPUP_ID } from '../Portal.const';

interface PopupPortal {
  children: React.ReactNode
}

export default function PopupPortal ({children}: PopupPortal) {
  return <Portal selectorId={POPUP_ID} portalStyles={{ zIndex: 2, position: 'fixed', top: 0, left: 0 }}>{children}</Portal> 
}


