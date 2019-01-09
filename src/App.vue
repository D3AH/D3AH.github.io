<template>
  <div id="app">
    <div class="jumbotron bg-transparent mb-0 radius-0">
      <div class="container">
        <!-- Header -->
        <div class="ht-tm-header">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="display-2">Diego Auy<span class="vim-caret">ó</span>n</h1>
              <div class="lead mb-3 text-mono text-success">WEB DEVELOPER</div>
            </div>
          </div>
        </div>
        <!-- Repo cards -->
        <div class="row">
            <div v-for="repo in repos" class="col-md-4 ">
              <div class="card text-center">
                <div class="card-body">
                  <h4 class="card-title">{{ repo.name }}</h4>
                  <p class="card-text">{{ repo.description }}</p>
                  <a href="#!" class="btn btn-primary">Github</a>
                </div>
                <div class="card-footer text-muted">
                  <div :class="repo.style">
                    {{ repo.language }}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
      
    </ol>
  </div>
</template>


<script>
import axios from 'axios'
import reposJson from './json/repos.json'
import mdFile from './assets/README.md'

export default {
  components: {mdFile},
  data() {
    return {
      repos: reposJson.map((repo) =>  {
        repo['style'] = repo.language ? repo.language.replace(new RegExp('^' + '\\s' + '+|' + '\\s' + '+$', 'g'), '').replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase().substring(1) : 'none';
        repo['style'] = 'font-' + repo['style'];
        return repo;
      })
    }
  },
  methods: {
    dasherize: function(string) {
      return string.replace(new RegExp('^' + '\\s' + '+|' + '\\s' + '+$', 'g'), '').replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase().substring(1);
    }
  }
};
</script>
