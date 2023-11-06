import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ogiDemo from "../../Assets/Projects/ogi.gif";
import dafFieldDemo from "../../Assets/Projects/daf-field.gif";
import dafSobjectDemo from "../../Assets/Projects/daf-sobject.gif";

function Teetools() {
    const orgDisplayInfoUsage = 'sf org display info -o <value> [--json] [-a <value>]';
    const orgDisplayInfoExample = 'sf org display info -o testorg';
    const dataAnalyzeFillrateUsage = 'sf data analyze fillrate -o <value> -s <value> [--json] [-a <value>] [-f <value>]'
    const dataAnalyzeFillrateExampleOne = 'sf data analyze fillrate -o testorg -s Account -f Id'
    const dataAnalyzeFillrateExampleTwo = 'sf data analyze fillrate -o testorg -s Account'

  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8}>
                <h1>teetools-plugin</h1>
                <p>A sf cli plugin that contains a collection of tools some people may find useful.</p>
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8}>
                <h3>Steps to install</h3>
                <ListGroup>
                    <ListGroup.Item>First, install sf cli. Directions can be found <a href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_npm">here</a>.<br></br>
                    Installation via npm is recommended, ensure you have an up to date version of <a href="https://nodejs.org/en">node</a> installed. 
                    </ListGroup.Item>
                    <ListGroup.Item>Once sf cli has been installed, run <code>sf plugins install teetools-plugin</code></ListGroup.Item>
                    <ListGroup.Item>Woo! You now have access to the commands included in teetools-plugin anywhere in your terminal.</ListGroup.Item>
                    <ListGroup.Item>Most of the commands included in teetools-plugin require authentication with a salesforce org.<br></br>
                    Please familiarize yourself with authenticating an org via the sf cli. Instructions can be found <a href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm">here</a>.
                    </ListGroup.Item>
                    <ListGroup.Item>You can also use <code>--help</code> to get more information about a particular command.<br></br>
                    Example: <code>sf org display info --help</code>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8}>
                <h3>Available Commands</h3>
                <ListGroup>
                    <ListGroup.Item><h4>org display info</h4>
                    <p>Displays information about an org to aid in understanding its size and complexity</p>
                    <p>Usage: <code>{orgDisplayInfoUsage}</code></p>
                    <p>Example: <code>{orgDisplayInfoExample}</code></p>
                    <img src={ogiDemo} className='img-fluid shadow-4' alt="demo of ogi command"></img>
                    </ListGroup.Item>
                    <ListGroup.Item><h4>data analyze fillrate</h4>
                    <p>Calculates the fill rate of a given field for a given sobject. If a field is not specified, it returns the fill rate of every field on the sobject.</p>
                    <p>Usage: <code>{dataAnalyzeFillrateUsage}</code></p>
                    <p>Example: <code>{dataAnalyzeFillrateExampleOne}</code></p>
                    <img src={dafFieldDemo} className='img-fluid shadow-4' alt="demo of ogi command"></img>
                    <br></br><br></br>
                    <p>Example: <code>{dataAnalyzeFillrateExampleTwo}</code></p>
                    <img src={dafSobjectDemo} className='img-fluid shadow-4' alt="demo of ogi command"></img>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Teetools;
