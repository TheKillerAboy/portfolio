import DsnGrid, {DsnGridProps} from "../../layout/DsnGrid";
import {dsnCN} from "../../hooks/helper";

function Facts({className , ...restProps} : DsnGridProps) {
    return (
        <DsnGrid className={dsnCN("facts-section p-relative over-hidden", className)} {...restProps}>
            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">4</span>
                    <h6 className="sm-title-block v-middle w-100">Years Experience</h6>
                </div>
            </div>

            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">37</span>
                    <h6 className="sm-title-block v-middle w-100">Github Repostitories</h6>
                </div>
            </div>

            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">9</span>
                    <h6 className="sm-title-block v-middle w-100">Places I've Lived</h6>
                </div>
            </div>

            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">3</span>
                    <h6 className="sm-title-block v-middle w-100">Companies I've Worked For</h6>
                </div>
            </div>
        </DsnGrid>
    );
}

export default Facts;