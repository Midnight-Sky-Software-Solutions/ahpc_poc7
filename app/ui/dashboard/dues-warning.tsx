import { WarningBox } from "@/app/ui/shared/warning-box";
import { getInvoices } from "@/app/services/wa-finance";

export default async function DuesWarning() {
  const duesInvoice = (await getInvoices(true))?.filter(i => i.OrderType == 'MembershipRenewal').at(0);
  return (
    <>
      {!!duesInvoice ?
        <WarningBox className="animate-fadein">You have an oustanding invoice of <strong>${duesInvoice.Value}</strong>.</WarningBox>
        : <></>
      }
    </>
  )
}