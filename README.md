## Getting Started with end to end Machine Learning and Website Integration

Here we are building a twitter sentiment analysis using ML, FastAPI, NEXT.JS, TailwindCSS 

First, run the frontend:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Now in order to run te backend we need to do 2 things:
- To generate the `.pickel` file from the ML model
- To generate the ML API's using `FastAPI`

If you want to generate the twitter csv dataset you can generate it too using the `python-backend > Pickel File Generation > CreatingDataset.ipynb` file and can change the twitter query as per your wish