<template>
  <div class="search">
    <input type="search" @input="onInputHandler" placeholder="Pesquise incríveis produtos" class="searchbar"/>
    <div class="search__icon">
      <font-awesome-icon icon="search" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      onInputHandler: {
        type: Function,
        default: ()=>{}
      }
    }
  }
</script>

<style scoped>
  .search {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
  }

  .searchbar {
    width: 20rem;
    height: 40px;
    padding: 0 15px;
    color: #707070;
    border: none;
    border: 1px solid #707070;
    border-radius: 100px;
    outline: none;
    font-size: .9rem;
  }

  .searchbar::placeholder { color: #D6D3D3; }

  .search__icon {
    color: #707070;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
</style>