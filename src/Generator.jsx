import React, { useState } from 'react';
import generate from 'nanoid/generate';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import { Headline3, Subtitle1, Headline5 } from '@material/react-typography';
import '@material/react-typography/dist/typography.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const characterCount = 4;

function Generator() {
  const [nanoSlug, setNanoSlug] = useState('');

  function generateNanoSlug() {
    setNanoSlug(generate(alphabet, characterCount));
  }

  return (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Grid style={{ flex: 1 }}>
        <Row>
          <Cell align="middle" phoneColumns={0} tabletColumns={0} desktopColumns={2} />
          <Cell align="middle" phoneColumns={4} tabletColumns={8} desktopColumns={8}>
            <Headline3>Nano-slug Generator</Headline3>
            <Subtitle1>4-character slugs following a [0-9][A-Z] alphabet.</Subtitle1>
            <Button raised onClick={() => generateNanoSlug()}>Generate</Button>
            {nanoSlug && <Headline5><strong>{nanoSlug}</strong></Headline5>}
          </Cell>
          <Cell align="middle" phoneColumns={0} tabletColumns={0} desktopColumns={2} />
        </Row>
      </Grid>
    </div>
  )
}

export default Generator;
