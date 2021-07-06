const ServerRendered = ({ params, query }) => {
  return (<>
    <div>params: {params.id}</div>
    <hr/>
    <div>
      {Object.keys(query).map((key) => key !== "id" ? (
        <div key={key}>
          {key}: {query[key]}
        </div>
      ) : null)}
    </div>
  </>)
}

export const getServerSideProps = async (context) => {
  const { params, query } = context
  return {
    props: { params, query }
  }
}

export default ServerRendered
