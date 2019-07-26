<Box  height="medium" direction="column"
tag='header'
direction='row'
align='top'
style ={{width: '100%', height:960}}
justify='between'
background='dark-2'
gridArea= "header"
alignContent='top'
alignSelf="top"
 pad={{ vertical: 'xlarge', horizontal: 'xlarge' }}
elevation='medium'>

<span class="block1">
<TextArea
placeholder="type here"
value={"John"}
style={{width:'110%', height:200}}
background="blue"/> 
</span>

<span class="block2">
<TextArea
placeholder="type here"
value={"Jack Daniel"}
style={{width:'110%', height:200}}
background="white"/>   
</span>

<span class="block3">
<TextArea
placeholder="type here"
value={"Jack Daniel"}
style={{width:'110%', height:200}}
background="white"/>   
</span>


</Box>




<Box overflow="auto" width="large"
height="medium" direction="column"
tag='header'
direction='row'
align='top'
style={{ width: '100%', height: 960 }}
justify='between'
background='grey-2'
gridArea="header"
alignContent='top'
alignSelf="top"
pad={{ vertical: 'xlarge', horizontal: 'xlarge' }}
elevation='medium'>
<span class="block1">

  <TextArea
    placeholder="type here"
    value={"John"}
    style={{ width: '110%', height: 200 }}
    background="blue" />
</span>

<span class="block2">
  <TextArea
    placeholder="type here"
    value={"Jack Daniel"}
    style={{ width: '110%', height: 200 }}
    background="white" />
</span>

<span class="block3">
  <TextArea
    placeholder="type here"
    value={"Jack Daniel"}
    style={{ width: '110%', height: 200 }}
    background="white" />
</span>


</Box>


<Box direction="row" pad={{ between: 'medium' }}>
<Box pad="small" background="neutral-1">A</Box>
<Box pad="small" background="neutral-2">B</Box>
<Box pad="small" background="neutral-3">C</Box>
</Box>


<Table>
<TableHeader>
  <TableRow>
    <TableCell scope="col" border="bottom">
      Name
    </TableCell>
    <TableCell scope="col" border="bottom">
      Flavor
    </TableCell>
  </TableRow>
</TableHeader>
<TableBody>
  <TableRow>
    <TableCell scope="row">
      <strong>Eric</strong>
    </TableCell>
    <TableCell>Coconut</TableCell>
  </TableRow>
  <TableRow>
    <TableCell scope="row">
      <strong>Chris</strong>
    </TableCell>
    <TableCell>Watermelon</TableCell>
  </TableRow>
</TableBody>
</Table>
