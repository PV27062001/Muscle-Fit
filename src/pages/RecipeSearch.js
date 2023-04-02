import React, { useState } from 'react';
import axios from 'axios';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        'https://edamam-recipe-search.p.rapidapi.com/search',
        {
          params: {
            q: query,
          },
          headers: {
            'X-RapidAPI-Key': '9a361b5ab9mshca1ce665063512ep106ae3jsn8d3f31cc6f79',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
          },
        }
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2" align="center" gutterBottom>
        Find the best way to cook your diet foods
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <form onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            label="Search Recipes"
            fullWidth
            value={query}
            onChange={handleQueryChange}
            InputProps={{
              endAdornment: (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              ),
            }}
          />
        </form>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.recipe.uri}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={recipe.recipe.image}
                  alt={recipe.recipe.label}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {recipe.recipe.label}
                  </Typography>
                  <List>
                    {recipe.recipe.ingredientLines.map((ingredient, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <Typography variant="subtitle1">{index + 1}</Typography>
                        </ListItemIcon>
                        <ListItemText primary={ingredient} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipeSearch;
