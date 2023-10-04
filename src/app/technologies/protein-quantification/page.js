import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="Protein Quantification" page="overview" technology="protein-quantification"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src="/jess2.png" className="img-fluid rounded-start" style={{float: "left"}}/>
          </div>
          <div className="col-lg-6">
            <p>
            Jess is a comprehensive protein analysis solution that helps researchers save time and improve the accuracy of their results. Specifically, Jess eliminates many of the manual steps of traditional western blotting including sample loading, protein separation, labeling, washing, detection and data analysis, making Jess easy to use and reducing the risk of errors. Jess can analyze a variety of protein samples including, cell lysates, tissue lysates, plasma, serum and other biological fluids (<i>e.g.</i>, cerebrospinal fluid). A fundamental advantage to Jess is the low sample volume required to perform detection and analysis, enabling researchers to maximize and extend the utility of precious/limited samples. Proteins of interest are detected with antibodies (user provided) conjugated to a fluorescent or chemiluminescent reporter. All other reagents required for protein detection using Jess are included in the Jess kits that are available through Bio-Techne (see Specifications). Jess automates the detection step using fluorescence or chemiluminescence detection methods and provides fully analyzed quantitative data in ~3 hours, such as protein expression levels, molecular weight and band intensities. These data can be further analyzed and interpreted by importing into compatible software (<i>e.g.</i>, ImageJ, Compass). Overall, Jess provides a faster and more efficient alternative to traditional western blotting, reducing the risk of errors and improving reproducibility. 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}