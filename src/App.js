import React from 'react';
import './App.css';
import { Grommet, Box, TextArea, Button, Grid, TextInput, Table, TableHeader, TableCell, TableRow, TableBody } from 'grommet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Database, FormFolder,FlagFill, Image, MailOption, Notification, PowerCycle, Resources, Secure } from 'grommet-icons';



function App() {
  let a = 'data:image/jpeg;base64,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'
  return (
    <Grommet>
      <CssBaseline />
      <div class="">


        <Grid fill rows={["auto", "flex", "auto"]}>
          <Box tag="header" background="status-unknown" pad="small" align="end">
            <div class="info2"> <img class="img" height="25" width="25" src={a} /> John Coleman </div>
          </Box>
          <Box direction="row" justify="between">
            <Box width="small" background="light-2" style={{ width: "20%" }}>
              <Table>
                <div class="info">
                  <span>
                    <div > <img class="img" height="40" width="40" src={a} />John Coleman</div>
                  </span>
                </div>
                
                
                <TableBody>
                  <div class="info">
                    <TableRow style={{height:20}}>
                      <TableCell>
                        <p></p>
                      </TableCell>


                    </TableRow>
                  </div>


                  <TableRow>
                    <TableCell>Dashboard</TableCell>
                    <TableCell><Database/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>UI Elements</TableCell>
                    <TableCell><FormFolder/></TableCell>
                  </TableRow>



                  <TableRow>
                    <TableCell>Components</TableCell>
                    <TableCell><Image/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Forms Stuff</TableCell>
                    <TableCell><MailOption/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Data Table</TableCell>
                    <TableCell><Notification/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Icons</TableCell>
                    <TableCell><PowerCycle/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Sample Page</TableCell>
                    <TableCell><Resources/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Extra</TableCell>
                    <TableCell><Secure/></TableCell>
                  </TableRow>

                  <Button style={{ width: '120%', height: 60 }} primary="blue" label="Add Project"/>


                </TableBody>
              </Table>

            </Box>



            <Box overflow="auto" width="large"
              height="medium" direction="column"
              tag='header'
              direction='column'
              align='top'
              style={{ width: '100%', height: 960 }}
              justify='between'
              background='light-5'
              gridArea="header"
              alignContent='top'
              alignSelf="top"
              pad={{ vertical: 'xlarge', horizontal: 'xlarge' }}
              elevation='medium'> 

                        <div><strong>Dashboard</strong></div>


              <Box direction="row" overflow="auto"
                style={{ width: 2300 }} alignSelf="center" justify='between'>
                 
                 <div class="block">
                <Box class="block" background='accent-2' style={{ width: 240, height: 180 }} pad={{ vertical: 'medium', horizontal: 'large' }} round="small">
                  <div><Image/></div>
                  <div class="text1">Stock total</div>
                  <div class="text2">$150,000</div>
                  <div class="text3"> Increased by 60%</div>
                </Box>
                </div>

                <div class="block">
                  <Box class="block" background='neutral-2' style={{ width: 240, height: 180 }} pad={{ vertical: 'medium', horizontal: 'large' }} round="small">
                    <div><Database/></div>
                    <div class="text1">Stock total</div>
                    <div class="text2">$150,000</div>
                    <div class="text3"> Increased by 60%</div>

                  </Box>
                </div>

                <div class="block">
                  <Box class="block" background='accent-4' style={{ width: 240, height: 180 }} pad={{ vertical: 'medium', horizontal: 'large' }} round="small">
                   <div><FlagFill/></div>
                    <div class="text1">Stock total</div>
                    <div class="text2">$150,000</div>
                    <div class="text3"> Increased by 60%</div>

                  </Box>
                </div>
              </Box>

              <Box overflow="auto" width="large" background='status-unknown'
                style={{ width: '150%', height: 500 }} alignSelf="center">
                <div class="header2"> <strong>Standard Table Design </strong></div>
                <Table margin="xsmall" style={{width: '100%'}} background='light-1'>
                  <TableHeader>
                    <TableRow>
                      <TableCell scope="col" border="bottom">
                       <strong>Name</strong> 
                     </TableCell>
                      <TableCell scope="col" border="bottom">
                        <strong>Email</strong>
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        <strong>User Type</strong>
                     </TableCell>
                     <TableCell scope="col" border="bottom">
                        <strong>Joined</strong>
                     </TableCell>
                     <TableCell scope="col" border="bottom">
                        <strong>Status</strong>
                     </TableCell>

                    </TableRow>
                  </TableHeader>
                  <TableBody>
                     
                    <TableRow>
                      <TableCell scope="row">
                        Eric
                      </TableCell>
                      <TableCell>eric@gmail.co</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>11-June-2012</TableCell>
                      <TableCell> <div class="box1"></div></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell scope="row">
                        Chris
                      </TableCell>
                      <TableCell>chris@gmail.com</TableCell>
                      <TableCell>Suspended</TableCell>
                      <TableCell>16-Sept-2015</TableCell>
                      <TableCell><div class="box2"></div></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell scope="row">
                        Dave
                      </TableCell>
                      <TableCell>dave@gamil.com</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>12-March-2004</TableCell>
                      <TableCell><div class="box3"></div></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell scope="row">
                        Tim
                      </TableCell>
                      <TableCell>tim@gmail.com</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>23-Feb-2018</TableCell>
                      <TableCell><div class="box4"></div></TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell scope="row">
                        Waddle
                      </TableCell>
                      <TableCell>waddle@gamil.com</TableCell>
                      <TableCell>Suspended</TableCell>
                      <TableCell>21-Jun-2016</TableCell>
                      <TableCell><div class="box5"></div></TableCell>
                    </TableRow>


                  </TableBody>
                </Table>
              </Box>

            </Box>

          </Box>


        </Grid>



      </div>
    </Grommet>
  );
}

export default App;
