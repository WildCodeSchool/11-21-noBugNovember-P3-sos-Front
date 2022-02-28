import * as React from 'react';
import { height, styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import './Styles/actions.css'
import Visible from '../assets/icones/VisibleEye.png'
import Edit from '../assets/icones/Edit.png'
import Delete from '../assets/icones/Delete.png'



function createData(titre, catégorie, sousCategorie, telechargement, actions) {
  return { titre, catégorie, sousCategorie, telechargement, actions };
}

const rows = [

    createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79,),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79, ),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79, ),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79, ),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79, ),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79, ),
  createData('Commencer a ne pas se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79),
  createData('Commencer se lancer à Grenoble', 'Jeunesse & Numérique', 'Mentorat', 79), 

  // createData('Donut', 452, 25.0),
  // createData('Eclair', 262, 16.0),
  // createData('Frozen yoghurt', 159, 6.0),
  // createData('Gingerbread', 356, 16.0),
  // createData('Honeycomb', 408, 3.2),
  // createData('Ice cream sandwich', 237, 9.0),
  // createData('Jelly Bean', 375, 0.0),
  // createData('KitKat', 518, 26.0),
  // createData('Lollipop', 392, 0.2),
  // createData('Marshmallow', 318, 0),
  // createData('Nougat', 360, 19.0),
  // createData('Oreo', 437, 18.0),
]
// .sort((a, b) => (a.calories < b.calories ? -1 : 1));


export default function UnstyledTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    
      <table className="list-table">
        <thead className='table-header'>
          <tr className="titre1-tableau">
            <th >Titre</th>
            <th>Catégorie</th>
            <th>Sous-catégorie</th>
            <th>Téléchargements</th>
            <th>Actions</th>

          </tr>
          
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr className="cellules-tableau" key={row.titre} >
              <td className="contour-cellule">{row.titre}</td>
              <td className="contour-cellule">
                {row.catégorie}
              </td>
              <td className="contour-cellule">
                {row.sousCategorie}
              </td>
              <td className="contour-cellule">
                {row.telechargement}
              </td>
              <td className="contour-cellule" >
                <div className='action-btn'>{row.actions}
                  <img className='action-icon' src={Edit} alt='edition' />
                  <img className='action-icon' src={Delete} alt='supprimer' />
                  <img className='action-icon' src={Visible} alt='visibilité' />
                </div>
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        {/* <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot> */}
      </table>
      
    
  );
}
