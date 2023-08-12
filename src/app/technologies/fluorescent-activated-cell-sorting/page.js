import TechnologyHeader from "@/components/TechnologyHeader"

export default function BDFACSMelody() {
  return (
    <>
      <TechnologyHeader title="Fluorescent Activated Cell Sorting" page="overview" technology="fluorescent-activated-cell-sorting"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-sm-7">
            <img src="/facs.png" className="img-fluid rounded-start" style={{maxWidth: "55%", float: "left"}}/>
            <img src="/facs-detail.png" className="img-fluid rounded-start" style={{maxWidth: "45%", float: "left"}}/>
          </div>
          <div className="col-sm-5">
            <p>
              The BD FACSMelody is a Fluorescence Activated Cell Sorter (FACS) that can sort or enrich specific cell populations based on their fluorescence intensities. Cells are fluorescently labeled either through the expression of fluorescent proteins or through the incorporation of fluorescent labels (antibodies or dyes). The FACSMelody provides temperature control, and is capable of sorting cells into collection tubes or into individual wells of various plate formats, either as single cells or populations of cells. The index sorting capabilities inherent within the FACSMelody enables back tracing of sorted cell(s) to reveal their specific fluorescence intensity(ies). The instrument can assist in many scientific applications, including clone development (e.g., isolation of CRISPR modified cell lines), characterization of rare cell types (e.g., blood samples), and enrichment of fluorescently labelled cell populations for downstream applications (e.g., single cell sequencing). FACS is performed on a fee-for-service basis. Please contact us for more information and to discuss how we can best assist you and your sorting requirements.
            </p>
          </div>
        </div>
        <div className="row">
          
        </div>
      </div>
    </>
  )
}