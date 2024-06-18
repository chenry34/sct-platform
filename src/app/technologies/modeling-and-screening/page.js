import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="Modeling and Screening" page="overview" technology="modeling-and-screening"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-12">
            <img src="/crispr.jpg" className="img-fluid rounded-start mt-3 me-3 mb-1 img-resize" style={{float: "left"}}/>
            <p className="mt-3" style={{overflow: "hidden", minWidth: "300px"}}>
            The CRISPR-Cas9 system has revolutionized the field of molecular biology and disease modelling. It is a method of editing the genetic code that is derived from processes originally observed in the bacterial immune system. It comprises a CRISPR-associated protein 9 (Cas9) endonuclease, a trans-activating CRISPR RNA (tracrRNA), and a single-guide RNA (sgRNA) that recognises a target sequence downstream of a protospacer adjacent motif (PAM) sequence (5’-NGG-3’).
            </p>
            <p style={{overflow: "hidden"}}>
            Previous methods employed to edit the genome such as zinc-finger nucleases or transcription activator-like effector nucleases are time consuming, laborious and can be associated with off-target effects. The CRISPR-Cas9 system relies on DNA-RNA interactions to regulate target sequence recognition, making it easy to locate, remove, add, or alter sections of genetic code with minimal off-target effects.
            </p>
            <p style={{overflow: "hidden"}}>
            CRISPR also benefits from a simplified cloning approach that employs a small recognition sequence of the sgRNA (20 base pairs) relative to the much larger approaches used in traditional homologous repair design.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}