import Portal from "..";
import { DROPDOWNS_ID } from '../Portal.const';

interface DropdownPortal {
  children: React.ReactNode
}

export default function DropdownPortal ({children}: DropdownPortal) {
  return <Portal  selectorId={DROPDOWNS_ID} portalStyles={{ zIndex: 1, position: 'fixed', top: 0, left: 0 }}>{children}</Portal> 
}